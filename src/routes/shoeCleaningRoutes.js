import express from 'express';
import * as shoeCleaningController from '../controllers/shoeCleaningController.js';

const router = express.Router();

// GET all items (with optional status filter)
router.get('/', shoeCleaningController.getAllItems);

// GET single item by ID
router.get('/:id', shoeCleaningController.getItemById);

// POST new item
router.post('/', shoeCleaningController.createItem);

// PUT update item
router.put('/:id', shoeCleaningController.updateItem);

// DELETE item
router.delete('/:id', shoeCleaningController.deleteItem);

export default router;