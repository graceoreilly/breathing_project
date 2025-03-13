import { describe, it, expect, beforeEach } from "vitest";
import {
  getAllTechniques,
  getTechniqueByID,
  addNewTechnique,
  updateTechniquebyID,
  deleteTechnique,
} from "./breathingController";

// Mock dataset
let mockTechniques;

beforeEach(async () => {
  mockTechniques = await getAllTechniques();
});

describe("Breathing Techniques API", () => {
  it("should retrieve all breathing techniques", async () => {
    const techniques = await getAllTechniques();
    expect(Array.isArray(techniques)).toBe(true);
    expect(techniques.length).toBe(mockTechniques.length);
  });

  it("should retrieve a technique by ID", async () => {
    const technique = await getTechniqueByID(1);
    expect(technique).toBeDefined();
    expect(technique.id).toBe(1);
  });

  it("should return undefined for a non-existent technique ID", async () => {
    const technique = await getTechniqueByID(999);
    expect(technique).toBeUndefined();
  });

  it("should add a new technique", async () => {
    const newTechnique = { name: "Box Breathing", description: "A technique to calm the mind" };
    const created = await addNewTechnique(newTechnique);
    expect(created).toHaveProperty("id");
    expect(created.name).toBe(newTechnique.name);
  });

  it("should update an existing technique", async () => {
    const updates = { name: "Updated Name" };
    const updated = await updateTechniquebyID(1, updates);
    expect(updated).toBeDefined();
    expect(updated.name).toBe("Updated Name");
  });

  it("should return null when updating a non-existent technique", async () => {
    const updates = { name: "Non-existent" };
    const updated = await updateTechniquebyID(999, updates);
    expect(updated).toBeNull();
  });

  it("should delete an existing technique", async () => {
    const deleted = await deleteTechnique(1);
    expect(deleted).toBeDefined();
    expect(deleted.id).toBe(1);

    const afterDeletion = await getTechniqueByID(1);
    expect(afterDeletion).toBeUndefined();
  });

  it("should return undefined when deleting a non-existent technique", async () => {
    const deleted = await deleteTechnique(999);
    expect(deleted).toBeUndefined();
  });
});
