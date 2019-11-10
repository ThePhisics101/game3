interface Player {
  name: string
  position: {
    x: number
    y: number
    a: number
    xa: number,
    ya: number,
    aa: number
  }
  health: number
  lastShot: number
  lastUpdate: number
  score: number
  attributes: {
    speed: number
    size: number
    damage: number
  }
  parentGame: number
}

export interface Game {
  players: Player[]
  refreshRate: number // ms
  private: boolean
  password?: string
  playerLimit: number
  name: string
  selfID: number
}