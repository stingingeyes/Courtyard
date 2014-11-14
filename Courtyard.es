/*
	Circe's Courtyard
	Structure Synth model ruleset
	Martin Latter
	26 Oct 2011, based on a static scene in The Odyssey (1997)

	render template: Ultimate Groovelock 
	License: MIT License
*/


#define sidelength 65
#define endlength 28.5


{color #888} gateway // origin
{x -17 y -11.375 z 63.5 color #888} leftend
{x 18.9 y -11.375 z 63.5 color #888} rightend
{x -17 y -11.375 z 63.5 color #888} leftside
{x 35.4 y -11.375 z 63.5 color #888} rightside
{x -18.625 y -11.8 z 30.8} floor
{x 5 y 25 z 65} mainlight


rule mainlight {
	{s 10 color #fff} sphere::light
}


// floor tile grid dimensions

rule floor {
	17 * {x 2} 32 * {z 2} chequeredfloor
}

// end floor tile grid


// gateway and gate blocks ----------------------

rule gateway {
	{s 3.5 24 40} box
	{s 3.5 24 40 x 2.8} box
	{s 13.3 7 40 x 0.368 y 1.5} box
	{s 13.3 26 1 x 0.368 y 0.04 z -20} box
	{s 14.3 0.5 3.6 x 0.34 y 21 z 5.2} box
	{s 18 0.5 6 x 0.27 y 28 z 3.5} box
	{s 29 33.1 4 x -0.5 y 0.1382 z 4.2} box
	{s 29.5 0.5 0.5 x -0.5 y 36 z 37.7} box
	{s 31 0.5 5 x -0.465 y 42.5 z 3.47 } box
	{s 29 33.1 4 x 0.84 y 0.1382 z 4.2} box
	{s 29.5 0.5 0.5 x 0.834 y 36 z 37.7} box
	{s 31 0.5 5 x 0.7815 y 42.5 z 3.47} box
	{s 13.4 0.25 52.8 x 0.364 y -47.45 z 0.1118} box
}

// end gateway


// left end -------------------------------------

rule leftend {
	{ry 90} endfloorleft
	{ry 90} endroofleft
	{ry 90 rz 90 x -33 y -50} endwallleft
	{ry 90 x 33.04 y 11.6 z 8.5} endsparleft
	{z -33.06 x -5.51} endcolumnsleft
}

rule endcolumnsleft {
	4 * {x 5.51} column
}

rule endfloorleft {
	{s 13.3 0.25 endlength x 2.85 y -2 z 0.138} box
}

rule endroofleft {
	{s 13.1 0.25 endlength x 2.9 y 50.6 z 0.138} box
}

rule endwallleft {
	{s 13.4 0.25 endlength x 2.915 y 21.8 z 0.138} box
}

rule endsparleft {
	{s 1.28 1.8 18} box
	{s 0.2 0.2 18 x -3.3 y 2} box
	{s 0.2 0.2 18 x -3.3 y -2} box
}

// end left end


// right end ------------------------------------

rule rightend {
	{ry 90} endfloorright
	{ry 90} endroofright
	{ry 90 rz 90 x -33 y -50 z -36} endwallright
	{ry 90 x 33.04 y 11.6 z -0.6} endsparright
	{z -33.06 x 13.38} endcolumnsright
}

rule endcolumnsright {
	4 * {x -5.51} column
}

rule endfloorright {
	{s 13.3 0.25 endlength x 2.85 y -2 z 0.138} box
}

rule endroofright {
	{s 13.1 0.25 endlength x 2.9 y 50.6 z 0.138} box
}

rule endwallright {
	{s 13.4 0.25 endlength x 2.915 y 21.8 z 0.138} box
}

rule endsparright {
	{s 1.28 1.8 18} box
	{s 0.2 0.2 18 x -3.3 y 2} box
	{s 0.2 0.2 18 x -3.3 y -2} box
}

// end right end


// left side ------------------------------------

rule leftside {
	{x -10.2 y 6 z -6.05} sidewallleft
	{y 11.6} sidesparleft
	{x 0.25 y -0.5} sidefloorleft
	//{y 11.6} sideroofleft
	{y 11.55} spherelightsideroofleft
	{} column
	5 * {z 5.51} column
	5 * {z -5.51} column
}

rule sidewallleft {
	{s 0.25 13 77.1} box
}

rule sidefloorleft {
	{s 12.3 0.25 sidelength x -0.36} box
}

rule sideroofleft {
	{s 11.998 0.25 sidelength x -0.36 y 4.13} box
}

rule sidesparleft {
	{s 1.28 1.8 sidelength} box
	{s 0.2 0.2 sidelength x 3.3 y 2} box
	{s 0.2 0.2 sidelength x 3.3 y -2} box
}

rule spherelightsideroofleft {
	{s 4 0.25 sidelength x -0.12 y 4.13} box
	{s 0.25 4.05 sidelength x -9.4 y 0.725} box
	{s 8.08 0.25 sidelength x -0.776 y 19.37} box
	{s 0.25 4.05 sidelength x -40.8 y 0.725} box
	{s 8.10 4.05 0.25 x -0.776 y 0.727 z -130 } box
	{x -6.2 y 2.5 z -36 s 2 color #fff} sidelightleft
}

rule sidelightleft {
	3 * {z 9} sphere::light
}

// end left side


// right side -----------------------------------

rule rightside {
	{x 1.55 y 6 z -6.05} sidewallright
	{x -8.6 y 11.6} sidesparright
	{x -0.05 y -0.5} sidefloorright
	//{y 11.6} sideroofright
	{ ry 180 y 11.55 x 8.67} spherelightsideroofright
	{x -8.6} column
	{x -8.6} forwardscolumn
	{x -8.6} backwardscolumn
	
}

rule forwardscolumn { // compensates for x placement
	5 * { z -5.51} column
}

rule backwardscolumn {
	5 * {z 5.51} column
}

rule sidewallright {
	{s 0.25 13 77.1} box
}

rule sidefloorright {
	{s 12.3 0.25 sidelength x -0.36} box
}

rule sideroofright {
	{s 11.998 0.25 sidelength x -0.36 y 4.13} box
}

rule sidesparright {
	{s 1.28 1.8 sidelength} box
	{s 0.2 0.2 sidelength x -3.3 y 2} box
	{s 0.2 0.2 sidelength x -3.3 y -2} box
}

rule spherelightsideroofright { // mirrored left rule
	{s 4 0.25 sidelength x -0.12 y 4.13 } box
	{s 0.25 4.05 sidelength x -9.4 y 0.725 } box
	{s 8.08 0.25 sidelength x -0.776 y 19.37 } box
	{s 0.25 4.05 sidelength x -40.8 y 0.725} box
	{s 8.10 4.05 0.25 x -0.776 y 0.727 z 130 } box
	{x -6.2 y 2.5 z -36 s 2 color #fff} sidelightright
}

rule sidelightright {
	3 * {z 9} sphere::light
}

// end right side


// column ---------------------------------------

rule column {
	{y 10.6 s 1.28 0.22 1.28} box
	{y 10.38 rz 90 s 0.2 1.35 1.35} cyl
	{s 0.145 x -0.48 y 66 z 3.78} leafring
	11 * {y 1 s 0.98} columnunit
	{y 0.4 rz 90 s 0.2 1.2 1.2} cyl
	{y 0.15 rz 90 s 0.3 1.4 1.4} cyl
	{y -0.2 rz 90 s 0.4 1.6 1.6} cyl
}

rule columnunit {
	{rz 90} columnbaseunit
}

rule columnbaseunit {
	10 * {rx 10} box
}

rule cyl {
	90 * {rx 1} box
}

rule leafring md 24 {
	{ry -7} leaf
	{x 1 ry 15} leafring
}

rule leaf md 7 {
	{s 1 1 0.1} box
	{s 0.98 y 1 rx 11} leaf
}

// end column


// chequered floor ------------------------------

rule chequeredfloor {
	{} tileroweven
	{z 1} tilerowodd
}

rule tilerowodd {
	4 * {x 2} tileeven
}

rule tileroweven {
	4 * {x 2} tileodd
}

rule tileeven {
	{color #000} tile
	{x 1 color #fff} tile
}

rule tileodd {
	{color #fff} tile
	{x 1 color #000} tile
}

rule tile {
	{s 1 0.25 1} box
}

// end chequered floor
