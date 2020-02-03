const defaultNumber = 2
console.log('asda')

var number = defaultNumber

var numberSlider = d3.sliderBottom()
    .min(0)
    .max(100)
    .width(400)
    .ticks(10)
    .step(1)
    .default(defaultNumber)
    .on('onchange', val => {
        number = val
        console.log('Number:', number)
    })
var gNumberSlider = d3
    .select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)')
gNumberSlider.call(numberSlider)


var primeNumbers = {
    2: 0,
    3: 0,
}


nodes_g = d3.select("body")