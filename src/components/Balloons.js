import React, { Component } from 'react';
import $ from "jquery";
import SingleBalloon from './SingleBalloon';

export default class Balloons extends Component {
    state = {
        windowWidth: $(window).width(),
        windowHeight: $(window).height()
    }

    pickANumber(max, min) {
        return Math.random() * (max - min + min) + min;
    }

    changeColors(el) {
        el.removeClass();
        var random = Math.floor(this.pickANumber(5, 1));
        el.addClass('bln-' + random + '-clone');
    }

    resetBalloon(el) {
        this.changeColors(el);

        var scale = (this.pickANumber(0.9, 0.5)).toFixed(1);
        el.css('transform', 'scale(' + scale + ')');

        var x = Math.floor(Math.random() * this.state.windowWidth);
        el.css('left', x);
        var y = Math.floor(Math.random() * 300 + this.state.windowHeight);
        el.css('top', y);
        this.releaseBalloon(el);
    }

    releaseBalloon(el) {
        var maxbllnSpeed = Math.floor(Math.random() * 10000 + 3000);
        var wind = Math.floor(Math.random() * - 30);
        var rotate = Math.floor(Math.random() * 560) + 100;


        el.animate(
            {
                top: '-180px',
                left: '+=' + wind + 0,
            }, {
                step: function () {
                    el.css({
                        transform: 'rotate(' + rotate + 'deg)',
                        transition: 'transform ' + maxbllnSpeed * .001 + 's linear'
                    });
                },
                duration: maxbllnSpeed,
                easing: 'linear',

                // //Optional: reset balloon and start animation over
                // complete: () => {
                //     this.resetBalloon(el);
                // }
            });

    }

    blowUpBalloons() {
        for (let i = 0; i < 120; i++) {
            var el = $('.bln-1').clone();
            el.appendTo('.blns');

            this.resetBalloon(el);

            var position = el.position();

            if (position.top > this.state.windowHeight || position.left > this.state.windowWidth || position.left < -100) {
                this.resetBalloon(el);
            } else {
                //releaseBalloon(el);
            }

        }
    }

    componentDidMount() {
        this.blowUpBalloons()
    }

    render() {
        return (
            <div className="blns">
                <SingleBalloon />
            </div>
        )
    }
}
