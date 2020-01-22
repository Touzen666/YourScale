import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cele",
  templateUrl: "./cele.component.html",
  styleUrls: ["./cele.component.scss"]
})
export class CeleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var rangeSlider = function() {
      var slider = $(".range-slider"),
        range = $(".range-slider__range"),
        value = $(".range-slider__value");

      slider.each(function() {
        value.each(function() {
          var value = $(this)
            .prev()
            .attr("value");
          $(this).html(value);
        });

        range.on("input", function() {
          $(this);
          // .next(value)
          // .html(this.value);
        });
      });
    };

    rangeSlider();
  }
}
