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
 * Unit test for Ticket entity.
 * Tests the business logic without Spring context.
 */
class TicketUnitTest {

    private Ticket ticket;

    @BeforeEach
    void setUp() {
        ticket = new Ticket();
    }

    @Test
    void testTicketCreation() {
        // Given
        String title = "Test Ticket";
        String description = "Test Description";
        Status status = Status.OPEN;
        Type type = Type.BUG;
        Priority priority = Priority.HIGH;

        // When
        ticket.setTitle(title);
        ticket.setDescription(description);
        ticket.setStatus(status);
        ticket.setType(type);
        ticket.setPriority(priority);

        // Then
        assertNotNull(ticket);
        assertEquals(title, ticket.getTitle());
        assertEquals(description, ticket.getDescription());
        assertEquals(status, ticket.getStatus());
        assertEquals(type, ticket.getType());
        assertEquals(priority, ticket.getPriority());
    }

    @Test
    void testTicketWithDates() {
        // Given
        LocalDate dueDate = LocalDate.now().plusDays(7);
        ZonedDateTime date = ZonedDateTime.now();

        // When
        ticket.setDueDate(dueDate);
        ticket.setDate(date);

        // Then
        assertEquals(dueDate, ticket.getDueDate());
        assertEquals(date, ticket.getDate());
    }

    @Test
    void testTicketEquals() {
        // Given
        Ticket ticket1 = new Ticket();
        ticket1.setId(1L);
        ticket1.setTitle("Ticket 1");

        Ticket ticket2 = new Ticket();
        ticket2.setId(1L);
        ticket2.setTitle("Ticket 2");

        Ticket ticket3 = new Ticket();
        ticket3.setId(2L);
        ticket3.setTitle("Ticket 1");

        // Then
        assertEquals(ticket1, ticket2, "Tickets with same ID should be equal");
        assertNotEquals(ticket1, ticket3, "Tickets with different IDs should not be equal");
    }

    @Test
    void testTicketAddRemoveAttachment() {
        // Given
        Attachment attachment = new Attachment();
        attachment.setId(1L);
        attachment.setName("test-attachment");

        // When
        ticket.addAttachment(attachment);

        // Then
        assertTrue(ticket.getAttachments().contains(attachment));
        assertEquals(ticket, attachment.getTicket());

        // When removing
        ticket.removeAttachment(attachment);

        // Then
        assertFalse(ticket.getAttachments().contains(attachment));
        assertNull(attachment.getTicket());
    }

    @Test
    void testTicketAddRemoveLabel() {
        // Given
        Label label1 = new Label();
        label1.setId(1L);
        label1.setLabel("bug");

        Label label2 = new Label();
        label2.setId(2L);
        label2.setLabel("urgent");

        // When
        ticket.addLabel(label1);
        ticket.addLabel(label2);

        // Then
        assertTrue(ticket.getLabels().contains(label1));
        assertTrue(ticket.getLabels().contains(label2));
        assertEquals(2, ticket.getLabels().size());

        // When removing
        ticket.removeLabel(label1);

        // Then
        assertFalse(ticket.getLabels().contains(label1));
        assertTrue(ticket.getLabels().contains(label2));
        assertEquals(1, ticket.getLabels().size());
    }

    @Test
    void testTicketToString() {
        // Given
        ticket.setId(1L);
        ticket.setTitle("Test Ticket");
        ticket.setStatus(Status.OPEN);
        ticket.setType(Type.BUG);
        ticket.setPriority(Priority.HIGH);

        // When
        String toString = ticket.toString();

        // Then
        assertNotNull(toString);
        assertTrue(toString.contains("Test Ticket"));
        assertTrue(toString.contains("OPEN"));
        assertTrue(toString.contains("BUG"));
        assertTrue(toString.contains("HIGH"));
    }

    @Test
    void testTicketFluentSetters() {
        // Given
        Project project = new Project();
        project.setId(1L);
        project.setName("Test Project");

        // When
        Ticket result = ticket
            .id(1L)
            .title("Test Title")
            .description("Test Description")
            .status(Status.OPEN)
            .type(Type.FEATURE)
            .priority(Priority.NORMAL)
            .project(project);

        // Then
        assertEquals(ticket, result);
        assertEquals(1L, ticket.getId());
        assertEquals("Test Title", ticket.getTitle());
        assertEquals("Test Description", ticket.getDescription());
        assertEquals(Status.OPEN, ticket.getStatus());
        assertEquals(Type.FEATURE, ticket.getType());
        assertEquals(Priority.NORMAL, ticket.getPriority());
        assertEquals(project, ticket.getProject());
    }
}



