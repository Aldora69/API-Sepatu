import * as ShoeCleaningModel from '../models/shoeCleaningModel.js';

export const createItem = async (req, res) => {
    try {
        const item = await ShoeCleaningModel.createItem(req.body);
        res.status(201).json({
            success: true,
            data: item
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const getAllItems = async (req, res) => {
    try {
        const { status } = req.query;
        const items = await ShoeCleaningModel.getAllItems(status);
        res.json({
            success: true,
            data: items
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const getItemById = async (req, res) => {
    try {
        const item = await ShoeCleaningModel.getItemById(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                error: 'Item not found'
            });
        }
        res.json({
            success: true,
            data: item
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const updateItem = async (req, res) => {
    try {
        const item = await ShoeCleaningModel.updateItem(req.params.id, req.body);
        if (!item) {
            return res.status(404).json({
                success: false,
                error: 'Item not found'
            });
        }
        res.json({
            success: true,
            data: item
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const deleteItem = async (req, res) => {
    try {
        await ShoeCleaningModel.deleteItem(req.params.id);
        res.json({
            success: true,
            message: 'Item deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};