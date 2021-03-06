import { h } from 'preact'
import SettingType from '../constants/SettingType'

const Settings = ({ settings, showSettings, setSetting, onAboutClick }) => {
  return (
    <div class={`settings-menu ${showSettings ? 'show' : ''}`}>
      <div class="settings-item">
        <label for="async" title="Download the images asynchronously">
          Async
        </label>
        <div class="toggle-switch-container">
          <input
            id="async"
            class="toggle-switch-input"
            type="checkbox"
            title="Download the images asynchronously"
            onChange={e => setSetting(SettingType.IS_ASYNC, e.target.checked)}
            checked={settings.isAsync}
          />
          <label class="toggle-switch-label" for="async">
            <div class="switch" />
          </label>
        </div>
      </div>

      <div class="settings-item">
        <label for="hd" title="Use high quality assets">
          HD
        </label>
        <div class="toggle-switch-container">
          <input
            id="hd"
            class="toggle-switch-input"
            type="checkbox"
            title="Use high quality assets"
            onChange={e => setSetting(SettingType.IS_HD, e.target.checked)}
            checked={settings.isHd}
          />
          <label class="toggle-switch-label" for="hd">
            <div class="switch" />
          </label>
        </div>
      </div>

      <a href="#" class="settings-item" onClick={onAboutClick}>
        About
      </a>
      <a
        class="settings-item"
        href="https://github.com/nefla/the-pod"
        target="_blank"
      >
        Github
      </a>
    </div>
  )
}

export default Settings
