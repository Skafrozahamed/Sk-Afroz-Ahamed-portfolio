const projects = [
  {
    id: 1,
    title: 'Automated Railway Signal System',
    icon: 'fa-train',
    description: 'ESP32-based bidirectional railway gate system with IoT capabilities',
    fullDescription: 'Designed a bidirectional railway gate system using ESP32 with IoT capabilities for real-time monitoring and control.',
    features: [
      'ESP32 microcontroller',
      'IR sensors for train detection',
      'Servo motors for gate control',
      'IoT integration for monitoring'
    ],
    reportUrl: '/assets/reports/project.pdf'
  },
  {
    id: 2,
    title: 'Real-Time Gas Monitoring System',
    icon: 'fa-gas-pump',
    description: 'IoT-based ambient gas monitoring with cloud integration',
    fullDescription: 'IoT-based ambient gas monitoring system using ESP32 with cloud integration for real-time data analysis and alerts.',
    features: [
      'Multiple gas sensors integration',
      'ThingSpeak cloud platform',
      'Real-time data visualization',
      'Alert notification system'
    ],
    reportUrl: '/assets/reports/project.pdf'
  }
]

export default projects