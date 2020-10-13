import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div class="mdl-layout mdl-js-layout">
				<header class="mdl-layout__header">
					<div class="mdl-layout__header-row">
						<span class="mdl-layout-title">Title</span>
					</div>

					<div class="mdl-layout__tab-bar">
						<a class="mdl-layout__tab is-active" href="#tab-1">
							Tab 1
						</a>
						<a class="mdl-layout__tab" href="#tab-2">
							Tab 2
						</a>
						<a class="mdl-layout__tab" href="#tab-3">
							Tab 3
						</a>
						<a class="mdl-layout__tab" href="#tab-4">
							Tab 4
						</a>
						<a class="mdl-layout__tab" href="#tab-5">
							Tab 5
						</a>
					</div>
				</header>

				<div class="mdl-layout__drawer">
					<span class="mdl-layout-title">Drawer</span>
				</div>

				<div class="mdl-layout__content">
					<section class="mdl-layout__tab-panel is-active" id="tab-1">
						Section 1
					</section>
					<section class="mdl-layout__tab-panel" id="tab-2">
						Section 2
					</section>
					<section class="mdl-layout__tab-panel" id="tab-3">
						Section 3
					</section>
					<section class="mdl-layout__tab-panel" id="tab-4">
						Section 4
					</section>
					<section class="mdl-layout__tab-panel" id="tab-5">
						Section 5
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
