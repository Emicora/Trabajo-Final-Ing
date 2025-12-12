package com.bugtracker.domain;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/**
 * Unit test for Project entity.
 * Tests the business logic without Spring context.
 */
class ProjectUnitTest {

    private Project project;

    @BeforeEach
    void setUp() {
        project = new Project();
    }

    @Test
    void testProjectCreation() {
        // Given
        String projectName = "Test Project";

        // When
        project.setName(projectName);

        // Then
        assertNotNull(project);
        assertEquals(projectName, project.getName());
    }

    @Test
    void testProjectWithId() {
        // Given
        Long projectId = 1L;
        String projectName = "Project with ID";

        // When
        project.setId(projectId);
        project.setName(projectName);

        // Then
        assertEquals(projectId, project.getId());
        assertEquals(projectName, project.getName());
    }

    @Test
    void testProjectEquals() {
        // Given
        Project project1 = new Project();
        project1.setId(1L);
        project1.setName("Project 1");

        Project project2 = new Project();
        project2.setId(1L);
        project2.setName("Project 2");

        Project project3 = new Project();
        project3.setId(2L);
        project3.setName("Project 1");

        // Then
        assertEquals(project1, project2, "Projects with same ID should be equal");
        assertNotEquals(project1, project3, "Projects with different IDs should not be equal");
    }

    @Test
    void testProjectHashCode() {
        // Given
        Project project1 = new Project();
        project1.setId(1L);

        Project project2 = new Project();
        project2.setId(1L);

        Project project3 = new Project();
        project3.setId(2L);

        // Then
        // In JPA entities, hashCode is based on class, not ID (for entities not yet persisted)
        // All Project instances have the same hashCode (the class hashCode)
        assertEquals(project1.hashCode(), project2.hashCode(), "Projects should have same hashCode (based on class)");
        assertEquals(project1.hashCode(), project3.hashCode(), "All Project instances have same hashCode (JPA pattern)");
        assertNotNull(project1.hashCode(), "hashCode should not be null");
    }

    @Test
    void testProjectToString() {
        // Given
        project.setId(1L);
        project.setName("Test Project");

        // When
        String toString = project.toString();

        // Then
        assertNotNull(toString);
        assertTrue(toString.contains("Test Project"));
        assertTrue(toString.contains("id=1"));
    }

    @Test
    void testProjectFluentSetters() {
        // When
        Project result = project.id(1L).name("Fluent Project");

        // Then
        assertEquals(project, result);
        assertEquals(1L, project.getId());
        assertEquals("Fluent Project", project.getName());
    }

    @Test
    void testProjectNullName() {
        // When
        project.setName(null);

        // Then
        assertNull(project.getName());
    }

    @Test
    void testProjectEmptyName() {
        // Given
        String emptyName = "";

        // When
        project.setName(emptyName);

        // Then
        assertEquals(emptyName, project.getName());
    }
}

