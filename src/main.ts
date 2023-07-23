import { Plugin } from 'obsidian';
import { SPSettingTab, SPSettings, DEFAULT_SETTINGS } from './settings';
import { Clock } from './clock';


export default class StatusPlusPlugin extends Plugin {
	settings: SPSettings;
	statusBar: HTMLElement;
	clock: Clock;

	async onload() {

		console.log('Loading status plus');

		await this.loadSettings();
		this.addSettingTab(new SPSettingTab(this.app, this));
		this.statusBar = this.addStatusBarItem();
		this.statusBar.addClass("clock");
		this.clock = new Clock(this);


		this.registerInterval(window.setInterval(async () =>
			this.statusBar.setText(await this.clock.setStatusBarText()), 500));


	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
