### CoNLib

[GitHub](https://github.com/Syren-Dev-Tech/CoNLib)

CoNLib is a Minecraft library mod that provides basic constructors and wrappers for generic content.

For example, to define a stone block and all the possible variants of it (stairs, slabs, etc):

```java
ModRegister registry = new ModRegister("my_mod");

StoneBlockSet.create(registry, "my_cool_block", CreativeModeTabs.BUILDING_BLOCKS);
```

Mobs are WIP, but can be defined using [GeckoLib](https://github.com/bernie-g/geckolib) models and animations.