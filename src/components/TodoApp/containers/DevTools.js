/**
 * Todo DevTools
 */

import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonotor from 'redux-slider-monitor'

const DevTools = createDevTools(
		<DockMonitor 
			toggleVisibilityKey='ctrl-h'
			changePositionKey='ctrl-q'
			changeMonitorKey='ctrl-m'
			defaultIsVisible={true}
		>
			<LogMonitor theme='tomorrow' select={state => state.todos} />
			<SliderMonotor />
		</DockMonitor>
	)

export default DevTools