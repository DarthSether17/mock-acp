scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e d d . . . . . . . 
    . . . . . . d d d . . d . . . . 
    . . . . d f f f f f d d . . . . 
    . . . . d d d f f f d d . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 97))
controller.moveSprite(mySprite, 50, 50)
mySprite.setScale(2, ScaleAnchor.Middle)
forever(function () {
    mySprite.setVelocity(0, 50)
})
