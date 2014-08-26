Javascript Challenge @ Makers Academy
=====================================

Week 7 @ Makers Academy: Optional Javascript challenge

Objectives:
-----------

- Practice Javascript and Jasmine

- Potentially create discount smart thermostat when Raspberry Pi is hooked up to home thermostat 

Technologies:
-------------
- JavaScript & jQuery
- Jasmine for testing

Specification:
--------------
- Thermostat starts at 20 degrees

- You can increase the temp with the up button

- You can decrease the temp with the down button

- The minimum temperature is 10 degrees

- If power saving mode is on, the maximum temperature is 25 degrees

- If power saving mode is off, the maximum temperature is 32 degrees

- Power saving mode is on by default

- You can reset the temperature to 20 by hitting the reset button

- The thermostat should color the display based on energy usage 

- < 18 is green, < 25 is yellow, otherwise red

- After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

Running the application:
------------------------
- Open index.html in any browser

Running the tests:
------------------
- Open jasmine/SpecRunner.html in any browser