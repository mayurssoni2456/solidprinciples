Liscov Substitution

This principle says - system behaviour should not be changed if subsclass of same parent is changed

lets look at the example

Bike has two subclass 
    MotorCycle
    Cycle

If I pass object of MotorCycle or Cycle - the functionality should not break


Solution - The solution to this problem is Interface Segregation