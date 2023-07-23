import { App, PluginSettingTab, Setting } from 'obsidian';
import StatusPlusPlugin from './main';

export interface SPSettings {
    clock: boolean;
    clockStyle: boolean;
}

export const DEFAULT_SETTINGS: SPSettings = {
    clock: true,
    clockStyle: true,
}

export class SPSettingTab extends PluginSettingTab {

    plugin: StatusPlusPlugin;

    constructor(app: App, plugin: StatusPlusPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Status Plus' });

        /********** Clock settings **********/
        // new Setting(containerEl)
        //     .setName("Clock")
        //     .setDesc("Add clock into status bar.")
        //     .addToggle(toggle => toggle
        //         .setValue(this.plugin.settings.clock)
        //         .onChange(value => {
        //             this.plugin.settings.clock = value;
        //             this.plugin.saveSettings();
        //         }));


        new Setting(containerEl)
            .setName("Clock Style")
            .setDesc("Make the clock more visible in status bar.")
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.clockStyle)
                .onChange(value => {
                    this.plugin.settings.clockStyle = value;
                    this.plugin.saveSettings();

                    if (this.plugin.settings.clockStyle === true) {
                        console.log(this.plugin.settings.clockStyle)
                        this.plugin.statusBar.addClass("clock")
                    } else {
                        this.plugin.statusBar.removeClass("clock");
                    }

                    this.display();
                }));


    }
}