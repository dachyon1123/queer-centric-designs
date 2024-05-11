const express = require('express');
const mongoose = require('mongoose');
const Pattern = require('../models/patternSchema')

// Get Patterns
async function getPatterns(req, res) {
  try {
    const patterns = await Pattern.find();

    res.status(200).json(patterns)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

// Get a single pattern
async function getPattern(req, res) {
  const id = req.params.id;
  try {
    const pattern = await Pattern.find({_id: id})
    if(!pattern) {
      return res.status(400).json({message: 'Failed to fetch pattern.'})
    }
    
    res.status(200).json(pattern)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

// Create a pattern
async function postPattern(req, res) {
  const { name, artist, model, price } = req.body;

  if (!name || !artist || !price) {
    return res.status(400).json({message: 'Please provide all necessary information'})
  }

  try {
    const newPattern = await Pattern.create({
      name,
      artist,
      model,
      price
    })

    res.status(200).json({message: 'New pattern created', pattern: newPattern})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


// Update a pattern
async function updatePattern(req, res) {
  const id = req.params.id;
  try {
    const pattern = await Pattern.findById({_id: id})

    if(!pattern) {
      return res.status(400).json({message: "Failed to update pattern"})
    }

    const updatedPattern = await Pattern.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedPattern)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

async function deletePattern(req, res) {
  const id = req.params.id

  try {
    const pattern = await Pattern.findById({_id: id})

    if(!pattern) {
      return res.status(400).json({message: 'Failed to delete pattern'})
    }

    await Pattern.deleteOne({_id: id})

    res.status(200).json({message: `Deleted pattern with id: ${id}`})

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getPatterns,
  getPattern,
  postPattern,
  updatePattern,
  deletePattern
}