import { Component, input, output } from '@angular/core';

export interface ActionButtonConfig {
	label: string;
	icon: string;
	tone: string;
	telemetry: { event?: string; source?: string };
	disabled?: boolean;
	confirm?: boolean;
}

@Component({
	selector: 'app-action-button',
	templateUrl: './action-button.component.html',
	styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
	readonly config = input.required<ActionButtonConfig>();
	readonly clicked = output<void>();

	protected handleClick() {
		console.log('Action: click', this.config());
		this.clicked.emit();
	}
}
