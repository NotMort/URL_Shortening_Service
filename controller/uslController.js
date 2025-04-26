const Url = require('../models/Url');
const { nanoid } = require('nanoid');

exports.createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortCode = nanoid(6);
  const newUrl = new Url({ url, shortCode });
  await newUrl.save();

  res.status(201).json(newUrl);
};

exports.getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;
  const found = await Url.findOne({ shortCode });

  if (!found) return res.status(404).json({ error: 'Not found' });

  found.accessCount += 1;
  found.updatedAt = new Date();
  await found.save();

  res.status(200).json(found);
};

exports.updateUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;
  const found = await Url.findOne({ shortCode });

  if (!found) return res.status(404).json({ error: 'Not found' });

  found.url = url;
  found.updatedAt = new Date();
  await found.save();

  res.status(200).json(found);
};

exports.deleteUrl = async (req, res) => {
  const { shortCode } = req.params;
  const deleted = await Url.findOneAndDelete({ shortCode });

  if (!deleted) return res.status(404).json({ error: 'Not found' });

  res.sendStatus(204);
};

exports.getStats = async (req, res) => {
  const { shortCode } = req.params;
  const found = await Url.findOne({ shortCode });

  if (!found) return res.status(404).json({ error: 'Not found' });

  res.status(200).json(found);
};
