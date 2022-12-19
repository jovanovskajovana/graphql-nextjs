export interface Ship {
  id: string;
  image: string;
  name: string;
  type: string;
  weight_kg: number;
  year_built: number;
  class: string;
  missions: {
    flight: string;
    name: string;
  }
  home_port: string;
}

export interface Ships {
  ships: Ship[];
}

export interface ShipDetails {
  ship: Ship;
}
