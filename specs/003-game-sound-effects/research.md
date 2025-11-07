# Research: Game Sound Effects

## Decision: Utilize Open-Source Sound Effects from Freesound.org

- **Decision**: We will source open-source sound effects for firing, alien destruction, and player hits primarily from Freesound.org. These sounds will be integrated into the Phaser `GameScene`.
- **Rationale**: Freesound.org offers a vast collection of high-quality, open-source audio assets under various Creative Commons licenses, making it suitable for this project's constraints. This approach ensures compliance with the "Open Source" constitution principle and the feature requirement for open-source assets.
- **Alternatives Considered**: 
    - **Mixkit, ElevenLabs, Sample Focus, OpenGameArt.org, 8UP, SFX Engine, Artlist, itch.io**: These platforms also offer open-source or royalty-free sounds. Freesound.org was chosen for its extensive library and clear licensing information, making it a reliable primary source. Other platforms can be considered as secondary sources if specific sound types are not found on Freesound.

## Sound Asset Selection (Example - User to provide actual files)

To proceed with implementation, the user will need to provide actual sound files (e.g., `.wav` or `.mp3`) and place them in `invaders-game/public/assets/sounds/`. For planning purposes, we will assume the following filenames:

- **Firing Sound**: `laser_shoot.wav` (e.g., from Freesound: "Retro Lasers by bubaproducer" or "Retro 8 Bit SFX Sound Effects Pack by MusicLegends")
- **Alien Destruction Sound**: `explosion.wav` (e.g., from Freesound: "8-bit explosion" or similar)
- **Player Hit Sound**: `player_hit.wav` (e.g., from Freesound: "8-bit hit" or similar)

**Note**: The specific licenses for the chosen sound files must be reviewed and adhered to by the user when selecting and integrating the actual assets.
