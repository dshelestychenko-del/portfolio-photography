export interface ProcessStep {
  id: string
  step: string
  title: string
  description: string
}

export interface ProcessCondition {
  title: string
  items: string[]
}

export interface ProcessData {
  title: string
  subtitle: string
  description: string
  steps: ProcessStep[]
  conditions: {
    title: string
    subtitle: string
    payment: ProcessCondition
    timeline: ProcessCondition
  }
}

export const processData: ProcessData = {
  title: "Work",
  subtitle: "Process",
  description: "A streamlined approach to deliver exceptional results for your brand",
  steps: [
    {
      id: "discovery",
      step: "01",
      title: "Discovery",
      description: "We explore your brand vision, goals, and photography requirements to establish creative direction."
    },
    {
      id: "strategy",
      step: "02",
      title: "Strategy",
      description: "Comprehensive planning including shot lists, styling concepts, and scheduling for seamless execution."
    },
    {
      id: "creation",
      step: "03",
      title: "Creation",
      description: "Professional photography session with meticulous attention to lighting, composition, and brand essence."
    },
    {
      id: "refinement",
      step: "04",
      title: "Refinement",
      description: "Expert retouching and editing to enhance images while preserving authenticity and brand consistency."
    },
    {
      id: "delivery",
      step: "05",
      title: "Delivery",
      description: "Timely delivery of optimized high-resolution images ready for all your marketing channels."
    }
  ],
  conditions: {
    title: "Working",
    subtitle: "Conditions",
    payment: {
      title: "Payment Terms",
      items: [
        "50% deposit required to secure booking",
        "Remaining 50% due upon project completion",
        "Payment via bank transfer or PayPal",
        "Detailed invoice provided"
      ]
    },
    timeline: {
      title: "Timeline & Delivery",
      items: [
        "Standard delivery: 5-7 business days",
        "Express delivery available (additional fee)",
        "2 rounds of revisions included",
        "Secure cloud delivery of final files"
      ]
    }
  }
}
