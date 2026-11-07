export const NAV = [
  { label: 'Services', items: [['Penetration testing', '#services'], ['24/7 monitoring', '#services'], ['Incident response', '#services'], ['Security training', '#services']] },
  { label: 'Threat feed', href: '#feed' },
  { label: 'Plans', href: '#plans' },
  { label: 'Resources', items: [['Threat feed', '#feed'], ['Client portal', '#auth'], ['Contact', '#contact']] },
]

export const SERVICES = [
  ['Penetration testing', 'We attack your apps, networks and staff the way real criminals would, then hand you a ranked fix list.', 'M4 12h16M12 4v16'],
  ['24/7 monitoring', 'Analysts watch your logs and endpoints around the clock and isolate a compromised machine within minutes.', 'M3 12c3-6 15-6 18 0-3 6-15 6-18 0z'],
  ['Incident response', 'When something breaks, we contain it, find the cause and get you back online with evidence preserved.', 'M12 3l9 16H3z'],
  ['Security training', 'Short phishing simulations and workshops that teach your team to spot and report attacks.', 'M4 6h16v10H8l-4 4z'],
]

export const PLANS = [
  ['Starter', 'Small teams', '$490', 'per month', ['Monthly vulnerability scan', 'Email phishing protection', 'Business hours support']],
  ['Defend', 'Growing companies', '$1,900', 'per month', ['24/7 monitoring', 'Quarterly penetration test', '1-hour critical response']],
  ['Fortress', 'Regulated industries', 'Custom', '', ['Dedicated analyst team', 'Compliance reporting (ISO 27001, SOC 2)', 'Incident response retainer']],
]

// Shown while the live API loads, or if the request fails
export const SAMPLE_FEED = [
  { cveID: 'CVE-2024-3400', vendorProject: 'Palo Alto Networks', product: 'PAN-OS', vulnerabilityName: 'GlobalProtect command injection', dateAdded: '2024-04-12', knownRansomwareCampaignUse: 'Known' },
  { cveID: 'CVE-2023-4966', vendorProject: 'Citrix', product: 'NetScaler', vulnerabilityName: 'Session token disclosure (Citrix Bleed)', dateAdded: '2023-10-18', knownRansomwareCampaignUse: 'Known' },
  { cveID: 'CVE-2021-44228', vendorProject: 'Apache', product: 'Log4j2', vulnerabilityName: 'JNDI remote code execution (Log4Shell)', dateAdded: '2021-12-10', knownRansomwareCampaignUse: 'Known' },
  { cveID: 'CVE-2024-21887', vendorProject: 'Ivanti', product: 'Connect Secure', vulnerabilityName: 'Command injection', dateAdded: '2024-01-10', knownRansomwareCampaignUse: 'Unknown' },
]
