const { Presentation, Campaign, Services, Plans, Marketing } = require("../models");


const getPresentation = (_, res) => {
  const presentation = new Presentation().find()
  return res.json(presentation);
};

const getCampaign = (_, res) => {
  const campaign = new Campaign().find()
  return res.json(campaign);
};

const getServices = (_, res) => {
  const services = new Services().find()
  return res.json(services);
};

const getPlans = (_, res) => {
  const plans = new Plans().find()
  return res.json(plans);
};

const getMarketing = (_, res) => {
  const marketing = new Marketing().find()
  return res.json(marketing);
};

module.exports = { getPresentation, getCampaign, getServices, getPlans, getMarketing }