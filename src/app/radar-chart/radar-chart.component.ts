import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

interface RadarChartData {
  axis: string;
  value: number;
}

@Component({
  selector: 'app-radar-chart',
  standalone: true ,
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.createRadarChart();
  }

  createRadarChart() {
    const data: RadarChartData[] = [
      { axis: "00:00", value: 65 },
      { axis: "02:00", value: 59 },
      { axis: "04:00", value: 90 },
      { axis: "06:00", value: 81 },
      { axis: "08:00", value: 56 },
      { axis: "10:00", value: 55 },
      { axis: "12:00", value: 40 },
      { axis: "14:00", value: 72 },
      { axis: "16:00", value: 62 },
      { axis: "18:00", value: 80 },
      { axis: "20:00", value: 50 },
      { axis: "22:00", value: 30 },
    ];

    const element = this.el.nativeElement;
    const width = 270;
    const height = 320;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(element).select('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const angleSlice = (Math.PI * 2) / data.length;
  
    const rScale = d3.scaleLinear()
      .range([0, radius])
      .domain([0, 100]);

    // Axis setup
    const axis = svg.selectAll('.axis')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'axis');

    axis.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', (d: RadarChartData, i: number) => rScale(100) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y2', (d: RadarChartData, i: number) => rScale(100) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr('stroke', 'gray')
      .attr('stroke-width', '2px');

    axis.append('text')
      .attr('x', (d: RadarChartData, i: number) => rScale(105) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y', (d: RadarChartData, i: number) => rScale(105) * Math.sin(angleSlice * i - Math.PI / 2))
      .text((d: RadarChartData) => d.axis)
      .style('font-size', '11px')
      .attr('text-anchor', 'middle');

    // Radar line
    const radarLine = d3.lineRadial<RadarChartData>()
      .radius((d: RadarChartData) => rScale(d.value))
      .angle((d: RadarChartData, i: number) => i * angleSlice);

    svg.append('path')
      .datum(data)
      .attr('d', radarLine)
      .style('fill', 'rgba(0, 123, 255, 0.2)')
      .style('stroke', 'blue')
      .style('stroke-width', 2);
  }
}
