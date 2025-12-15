package com.bugtracker.domain;

import static org.junit.jupiter.api.Assertions.*;

import com.bugtracker.domain.enumeration.Priority;
import com.bugtracker.domain.enumeration.Status;
import com.bugtracker.domain.enumeration.Type;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * Test unitario para la entidad Ticket.
 * Prueba la lógica de negocio sin contexto de Spring.
 */
class TicketUnitTest {

    private Ticket ticket;

    @BeforeEach
    void setUp() {
        ticket = new Ticket();
    }

    @Test
    void testTicketCreation() {
        // Dado
        String title = "Ticket de Prueba";
        String description = "Descripción de Prueba";
        Status status = Status.OPEN;
        Type type = Type.BUG;
        Priority priority = Priority.HIGH;

        // Cuando
        ticket.setTitle(title);
        ticket.setDescription(description);
        ticket.setStatus(status);
        ticket.setType(type);
        ticket.setPriority(priority);

        // Entonces
        assertNotNull(ticket);
        assertEquals(title, ticket.getTitle());
        assertEquals(description, ticket.getDescription());
        assertEquals(status, ticket.getStatus());
        assertEquals(type, ticket.getType());
        assertEquals(priority, ticket.getPriority());
    }

    @Test
    void testTicketWithDates() {
        // Dado
        LocalDate dueDate = LocalDate.now().plusDays(7);
        ZonedDateTime date = ZonedDateTime.now();

        // Cuando
        ticket.setDueDate(dueDate);
        ticket.setDate(date);

        // Entonces
        assertEquals(dueDate, ticket.getDueDate());
        assertEquals(date, ticket.getDate());
    }

    @Test
    void testTicketEquals() {
        // Dado
        Ticket ticket1 = new Ticket();
        ticket1.setId(1L);
        ticket1.setTitle("Ticket 1");

        Ticket ticket2 = new Ticket();
        ticket2.setId(1L);
        ticket2.setTitle("Ticket 2");

        Ticket ticket3 = new Ticket();
        ticket3.setId(2L);
        ticket3.setTitle("Ticket 1");

        // Entonces
        assertEquals(ticket1, ticket2, "Los tickets con el mismo ID deben ser iguales");
        assertNotEquals(ticket1, ticket3, "Los tickets con diferentes IDs no deben ser iguales");
    }

    @Test
    void testTicketAddRemoveAttachment() {
        // Dado
        Attachment attachment = new Attachment();
        attachment.setId(1L);
        attachment.setName("test-attachment");

        // Cuando
        ticket.addAttachment(attachment);

        // Entonces
        assertTrue(ticket.getAttachments().contains(attachment));
        assertEquals(ticket, attachment.getTicket());

        // Cuando se elimina
        ticket.removeAttachment(attachment);

        // Entonces
        assertFalse(ticket.getAttachments().contains(attachment));
        assertNull(attachment.getTicket());
    }

    @Test
    void testTicketAddRemoveLabel() {
        // Dado
        Label label1 = new Label();
        label1.setId(1L);
        label1.setLabel("bug");

        Label label2 = new Label();
        label2.setId(2L);
        label2.setLabel("urgent");

        // Cuando
        ticket.addLabel(label1);
        ticket.addLabel(label2);

        // Entonces
        assertTrue(ticket.getLabels().contains(label1));
        assertTrue(ticket.getLabels().contains(label2));
        assertEquals(2, ticket.getLabels().size());

        // Cuando se elimina
        ticket.removeLabel(label1);

        // Entonces
        assertFalse(ticket.getLabels().contains(label1));
        assertTrue(ticket.getLabels().contains(label2));
        assertEquals(1, ticket.getLabels().size());
    }

    @Test
    void testTicketToString() {
        // Dado
        ticket.setId(1L);
        ticket.setTitle("Ticket de Prueba");
        ticket.setStatus(Status.OPEN);
        ticket.setType(Type.BUG);
        ticket.setPriority(Priority.HIGH);

        // Cuando
        String toString = ticket.toString();

        // Entonces
        assertNotNull(toString);
        assertTrue(toString.contains("Ticket de Prueba"));
        assertTrue(toString.contains("OPEN"));
        assertTrue(toString.contains("BUG"));
        assertTrue(toString.contains("HIGH"));
    }

    @Test
    void testTicketFluentSetters() {
        // Dado
        Project project = new Project();
        project.setId(1L);
        project.setName("Proyecto de Prueba");

        // Cuando
        Ticket result = ticket
            .id(1L)
            .title("Título de Prueba")
            .description("Descripción de Prueba")
            .status(Status.OPEN)
            .type(Type.FEATURE)
            .priority(Priority.NORMAL)
            .project(project);

        // Entonces
        assertEquals(ticket, result);
        assertEquals(1L, ticket.getId());
        assertEquals("Título de Prueba", ticket.getTitle());
        assertEquals("Descripción de Prueba", ticket.getDescription());
        assertEquals(Status.OPEN, ticket.getStatus());
        assertEquals(Type.FEATURE, ticket.getType());
        assertEquals(Priority.NORMAL, ticket.getPriority());
        assertEquals(project, ticket.getProject());
    }
}
