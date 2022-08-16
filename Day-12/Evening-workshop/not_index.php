<?php

abstract class Test {
    public function test(){

    }

    abstract function testTwo();
}

interface TestInterface{
    public function test();
}

class Pokemon
{
    protected $name;
    protected $element;
    protected $hp;
    protected $damage;

    public function __construct(
        $name,
        $element,
        $hp,
        $damage
    ) {
        $this->name = $name;
        $this->element = $element;
        $this->hp = $hp;
        $this->damage = $damage;
    }

    public function getHp()
    {
        return $this->hp;
    }

    public function setHp(int $hp)
    {
        $this->hp = $hp;

        return $this;
    }

    public function isAlive()
    {
        return $this->hp > 0;
    }

    public function attack(Pokemon &$target)
    {
        if ($this->isAlive()) {
            $target->setHp($target->hp - $this->damage);
        }
    }

    public function walk()
    {
        echo "is walking";
        echo "<br>";
    }
}

class FlyingPokemons extends Pokemon
{
    public function fly()
    {
        echo "Flying";
        echo "<br>";
    }
}

class SwimingPokemons extends Pokemon
{
    public function swim()
    {
        echo "Swim";
        echo "<br>";
    }
}

$pikachu = new Pokemon('Pikachu', 'electric', 100, 50);
$charmender = new FlyingPokemons('charmender', 'fire', 200, 75);

echo "Pikachu";
echo "<br>";
$pikachu->walk();


echo "Charmender";
echo "<br>";
$charmender->walk();
$charmender->fly();


echo "Charmender";
echo "<br>";
echo $charmender->getHp();

$pikachu->attack($charmender);
$pikachu->attack($charmender);
$pikachu->attack($charmender);
$pikachu->attack($charmender);
echo "Charmender";
echo "<br>";
echo $charmender->getHp();


echo "Pikachu";
echo "<br>";
echo $pikachu->getHp();
$charmender->attack($pikachu);
echo "Pikachu";
echo "<br>";
echo $pikachu->getHp();
