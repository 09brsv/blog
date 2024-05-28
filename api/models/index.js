const presentation = require("../data/presentation.json")
const services = require("../data/services.json")
const marketing = require("../data/marketing.json")
const plans = require("../data/plans.json")
const campaign = require("../data/campaign.json")


class Presentation {
	find() {
		return presentation
	}
}


class Campaign {
  find() {
    return campaign
  }
}

class Services {
  find() {
    return services
  }
}

class Marketing {
  find() {
    return marketing
  }
}

class Plans {
  find() {
    return plans
  }
}


module.exports = {
	Presentation,
  Campaign,
  Services,
  Marketing,
  Plans
}
