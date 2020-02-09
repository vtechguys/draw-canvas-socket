function calcMousePosition(drawProperties){
    const {
        x = 0, 
        y = 0, 
        color = '#000',
        lineWidth = 5,
        screen = {}
    } = drawProperties;
    
    const w = window.innerWidth;
    const h = window.innerHeight;

    if(!screen){
        screen.w = w;
        screen.h = w;
        return {
            x, y, color, lineWidth
        };
    }
    return {
        x: ( x / screen.w ) * w,
        y: ( y / screen.h ) * h,
        color, 
        lineWidth
    };

}