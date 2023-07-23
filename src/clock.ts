import { Notice, moment, TFolder, TFile } from 'obsidian';
import StatusPlusPlugin from './main';
import { SPSettings } from './settings';


const MILLISECS_IN_MINUTE = 60 * 1000;


export class Clock {
    plugin: StatusPlusPlugin;
    settings: SPSettings;

    getTimeString() {
        // 获取当前系统日期时间
        let dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();

        let time = dateTime.toLocaleTimeString();

        let time_symbol;

        switch (hours) {
            case 0:
                if (minutes > 30) {
                    time_symbol = "🕧"
                }
                time_symbol = "🕛";
                break;
            case 1:
                if (minutes > 30) {
                    time_symbol = "🕜"
                }
                time_symbol = "🕐";
                break;
            case 2:
                if (minutes > 30) {
                    time_symbol = "🕝"
                }
                time_symbol = "🕑";
                break;
            case 3:
                if (minutes > 30) {
                    time_symbol = "🕞"
                }
                time_symbol = "🕒";
                break;
            case 4:
                if (minutes > 30) {
                    time_symbol = "🕟"
                }
                time_symbol = "🕓";
                break;
            case 5:
                if (minutes > 30) {
                    time_symbol = "🕠"
                }
                time_symbol = "🕔";
                break;
            case 6:
                if (minutes > 30) {
                    time_symbol = "🕡"
                }
                time_symbol = "🕕";
                break;
            case 7:
                if (minutes > 30) {
                    time_symbol = "🕢"
                }
                time_symbol = "🕖";
                break;
            case 8:
                if (minutes > 30) {
                    time_symbol = "🕣"
                }
                time_symbol = "🕗";
                break;
            case 9:
                if (minutes > 30) {
                    time_symbol = "🕤"
                }
                time_symbol = "🕘";
                break;
            case 10:
                if (minutes > 30) {
                    time_symbol = "🕥"
                }
                time_symbol = "🕙";
                break;
            case 11:
                if (minutes > 30) {
                    time_symbol = "🕦"
                }
                time_symbol = "🕚";
                break;
            case 12:
                if (minutes > 30) {
                    time_symbol = "🕧"
                }
                time_symbol = "🕛";
                break;
            case 13:
                if (minutes > 30) {
                    time_symbol = "🕜"
                }
                time_symbol = "🕐";
                break;
            case 14:
                if (minutes > 30) {
                    time_symbol = "🕝"
                }
                time_symbol = "🕑";
                break;
            case 15:
                if (minutes > 30) {
                    time_symbol = "🕞"
                }
                time_symbol = "🕒";
                break;
            case 16:
                if (minutes > 30) {
                    time_symbol = "🕟"
                }
                time_symbol = "🕓";
                break;
            case 17:
                if (minutes > 30) {
                    time_symbol = "🕠"
                }
                time_symbol = "🕔";
                break;
            case 18:
                if (minutes > 30) {
                    time_symbol = "🕡"
                }
                time_symbol = "🕕";
                break;
            case 19:
                if (minutes > 30) {
                    time_symbol = "🕢"
                }
                time_symbol = "🕖";
                break;
            case 20:
                if (minutes > 30) {
                    time_symbol = "🕣"
                }
                time_symbol = "🕗";
                break;
            case 21:
                if (minutes > 30) {
                    time_symbol = "🕤"
                }
                time_symbol = "🕘";
                break;
            case 22:
                if (minutes > 30) {
                    time_symbol = "🕥"
                }
                time_symbol = "🕙";
                break;
            case 23:
                if (minutes > 30) {
                    time_symbol = "🕦"
                }
                time_symbol = "🕚";
                break;
            default:
                break;
        }

        return time;

    }

    constructor(plugin: StatusPlusPlugin) {
        this.plugin = plugin;
        this.settings = plugin.settings;
    }

    async setStatusBarText(): Promise<string> {
        return this.getTimeString();
    }


}