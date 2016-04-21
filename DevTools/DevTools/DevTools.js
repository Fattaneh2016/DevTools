var stepnumber = 1;
var thing='ants';
function DoStuff() {
    console.time('steps time');
    console.log('Hi');

    console.warn('Ohhhh');
    console.error('be careful ');
    console.debug('Debuging');
    console.info('please note');
   


    console.group('steps');

    FirstStep();
    stepnumber++;

    function FirstStep() {
        console.group( 'step %i ',stepnumber);
        console.log('Finding %s', thing);
        console.group('%c my group', "font-size:x-large");
        console.timeEnd('steps time');
    }
    
}