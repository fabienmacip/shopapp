import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { sliderData } from 'src/app/api/slider';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy {

  slider: Slide[] = sliderData
  currentSlide: Slide = this.slider[0]
  currentIndex: number = 0

  indexObs: Observable<number> = interval(5000)
  indexObsSub: Subscription | undefined
  constructor() { }

  ngOnInit(): void {
    this.indexObsSub = this.indexObs.subscribe({
      next: (value: number) => {
        this.handleChangeImage(1)
      }

    })
  }

  ngOnDestroy(): void {
      this.indexObsSub?.unsubscribe()
  }

  handleChangeImage(index: number): void{
    if(index === -1){
      if(this.currentIndex === 0){
        this.currentIndex = this.slider.length - 1
      } else {
        this.currentIndex--
      }
    } else{
      if(this.currentIndex === (this.slider.length - 1)){
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    }
    this.currentSlide = this.slider[this.currentIndex]
  }
}
