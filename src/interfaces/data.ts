export interface Ship {
  id: string
  image?: string
  name: string
  type: string
  weight_kg?: number
  year_built?: number
  class?: string
  home_port?: string
  missions?: Mission[]
}

export interface Mission {
  name: string
  flight: string
}

export interface Ships {
  ships: Ship[]
}

export interface ShipDetails {
  ship: Ship
}
