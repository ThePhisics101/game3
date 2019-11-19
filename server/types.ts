interface Player {
  name: string
  position: {
    x: number,  y: number,  a: number
    xa: number, ya: number, aa: number
  }
  health: number
  lastShot: number
  lastUpdate: number
  score: number
  attributes: {
    speed: {
      linear: number
      radial: number
    }
    size: number
    damage: number
  }
  parentGame: number
}

export interface Game {
  players: Player[]
  refreshRate: number // ms
  playerLimit: number
  attributes: {
    friction: number
    scale: number
  }
  selfID: number
}