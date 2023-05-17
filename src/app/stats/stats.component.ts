import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
    @Input() labels: string[] = []
    @Input() data: number[] = []
    ngOnInit() {
        var myChart = new Chart("myChart", {
        type: 'line',
        data: {
            labels: this.labels,
            datasets: [{
                label: '',
                data: this.data,
                backgroundColor: 'rgba(43,135,209,0.2)', 
                borderColor: 'rgb(43,135,209)',
                borderWidth: 2,
                fill: {
                  target: 'origin',
                  above: 'rgba(43,135,209,0.2)',
                  below: 'rgba(43,135,209,0.6)'
                }
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    }
                },
                x: {
                    ticks: {
                        autoSkip: false
                    }
                },
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    }
}
