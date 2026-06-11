export interface NetworkPerson {
  id: string;
  name: string;
  role: string;
}

export interface NetworkLink {
  source: string;
  target: string;
  relation: string;
}

export interface NetworkResult {
  people: NetworkPerson[];
  links: NetworkLink[];
  riskScore: number;
  findings: string[];
}