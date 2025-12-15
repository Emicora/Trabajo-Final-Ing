package com.bugtracker.domain;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * Test unitario para la entidad Project.
 * Prueba la lógica de negocio sin contexto de Spring.
 */
class ProjectUnitTest {

    private Project project;

    @BeforeEach
    void setUp() {
        project = new Project();
    }

    @Test
    void testProjectCreation() {
        // Dado
        String projectName = "Proyecto de Prueba";

        // Cuando
        project.setName(projectName);

        // Entonces
        assertNotNull(project);
        assertEquals(projectName, project.getName());
    }

    @Test
    void testProjectWithId() {
        // Dado
        Long projectId = 1L;
        String projectName = "Proyecto con ID";

        // Cuando
        project.setId(projectId);
        project.setName(projectName);

        // Entonces
        assertEquals(projectId, project.getId());
        assertEquals(projectName, project.getName());
    }

    @Test
    void testProjectEquals() {
        // Dado
        Project project1 = new Project();
        project1.setId(1L);
        project1.setName("Project 1");

        Project project2 = new Project();
        project2.setId(1L);
        project2.setName("Project 2");

        Project project3 = new Project();
        project3.setId(2L);
        project3.setName("Project 1");

        // Entonces
        assertEquals(project1, project2, "Los proyectos con el mismo ID deben ser iguales");
        assertNotEquals(project1, project3, "Los proyectos con diferentes IDs no deben ser iguales");
    }

    @Test
    void testProjectHashCode() {
        // Dado
        Project project1 = new Project();
        project1.setId(1L);

        Project project2 = new Project();
        project2.setId(1L);

        Project project3 = new Project();
        project3.setId(2L);

        // Entonces
        // En entidades JPA, hashCode se basa en la clase, no en el ID (para entidades aún no persistidas)
        // Todas las instancias de Project tienen el mismo hashCode (el hashCode de la clase)
        assertEquals(project1.hashCode(), project2.hashCode(), "Los proyectos deben tener el mismo hashCode (basado en la clase)");
        assertEquals(project1.hashCode(), project3.hashCode(), "Todas las instancias de Project tienen el mismo hashCode (patrón JPA)");
        assertNotNull(project1.hashCode(), "hashCode no debe ser null");
    }

    @Test
    void testProjectToString() {
        // Dado
        project.setId(1L);
        project.setName("Proyecto de Prueba");

        // Cuando
        String toString = project.toString();

        // Entonces
        assertNotNull(toString);
        assertTrue(toString.contains("Proyecto de Prueba"));
        assertTrue(toString.contains("id=1"));
    }

    @Test
    void testProjectFluentSetters() {
        // Cuando
        Project result = project.id(1L).name("Proyecto Fluent");

        // Entonces
        assertEquals(project, result);
        assertEquals(1L, project.getId());
        assertEquals("Proyecto Fluent", project.getName());
    }

    @Test
    void testProjectNullName() {
        // Cuando
        project.setName(null);

        // Entonces
        assertNull(project.getName());
    }

    @Test
    void testProjectEmptyName() {
        // Dado
        String emptyName = "";

        // Cuando
        project.setName(emptyName);

        // Entonces
        assertEquals(emptyName, project.getName());
    }
}
