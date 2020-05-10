import React from 'react';
import './LoadingIndicator.scss';

const LoadingIndicator = () => {
    return (
        <section>
        <svg width="350" height="250">
            <circle class="shape" />
            <circle class="shape" />
            <circle class="shape" />
            <circle class="shape" />
            <circle class="shape" />
	    </svg>
        </section>
    )
}

export default LoadingIndicator;