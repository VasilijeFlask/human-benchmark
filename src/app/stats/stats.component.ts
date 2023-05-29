import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatisticsService } from '../services/statistics.service';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

    @Input() data: number[] = []
    @Input() labels: string[] = []
    @Input() shouldUseService = false;

    constructor(private statisticsService: StatisticsService) { }

    ngOnInit() {
        // Get user data from service if shouldUseService is true
        const data = this.shouldUseService ? this.statisticsService.getData() : this.data;
        const labels = this.shouldUseService ? data.map((_, index) => (index + 1).toString()) : this.labels;

        var myChart = new Chart("myChart", {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: data,
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
