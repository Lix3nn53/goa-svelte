<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("guide.introduction.subject")}</h2>
<div class="guide-page flex-container row-reverse">
  <div style="flex: 6 1 0%;">
    <div class="card flex-container column" style="padding: 9px;">
      <div class="card-header"><h2>Fighter</h2></div>
      <div class="card-content">
        <img
          src="data:image/png;base64,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"
          alt="icon"
          class="pixel-icon"
          style="width: 150px; margin: auto;"
        />
        <table class="table" style="padding-top: 20px;">
          <tbody
            ><div />
            <tr
              ><td><span style="font-weight: bold;">Class Tier: </span></td><td
                >2</td
              ></tr
            ><tr
              ><td><span style="font-weight: bold;">Main Element: </span></td
              ><td>🔥 Fire</td></tr
            ></tbody
          >
        </table>
        <h3 style="text-align: center;">Weapons</h3>
        <table class="table">
          <tbody
            ><div />
            <tr
              ><td><span style="font-weight: bold;">Battleaxe</span></td><td
                ><span style="font-weight: bold;">Great Sword</span></td
              ><td><span style="font-weight: bold;">War Hammer</span></td></tr
            ></tbody
          >
        </table>
        <h3 style="text-align: center;">Armors</h3>
        <table class="table">
          <tbody
            ><div />
            <tr
              ><td><span style="font-weight: bold;">Plate</span></td><td
                ><span style="font-weight: bold;">Feather</span></td
              ><td><span style="font-weight: bold;">Light</span></td></tr
            ></tbody
          >
        </table>
        <table class="table">
          <tbody
            ><div />
            <tr /></tbody
          >
        </table>
        <h3 style="text-align: center;">Attributes</h3>
        <table class="table">
          <tbody
            ><div />
            <tr
              ><td><span style="font-weight: bold;">Health: </span></td><td
                >7</td
              ></tr
            ><tr
              ><td><span style="font-weight: bold;">Mana: </span></td><td>2</td
              ></tr
            ><tr
              ><td><span style="font-weight: bold;">Damage: </span></td><td
                >9</td
              ></tr
            ><tr
              ><td><span style="font-weight: bold;">Defense: </span></td><td
                >5</td
              ></tr
            ><tr
              ><td><span style="font-weight: bold;">Critical Chance: </span></td
              ><td>2</td></tr
            ></tbody
          >
        </table>
      </div>
      <div />
    </div>
  </div>
  <div style="flex: 10 1 0%;">
    <div style="padding-bottom: 9px;">
      <p>Fighter is a tier 1 class in Guardians of Adelia.</p>
      <h2><span>Playstyle</span></h2>
      <p>
        Fighter's skills has low cooldown. Gain combo stacks with your skills
        and use your ulti to get into the zone!
      </p>
      <h2 style="padding-bottom: 9px;"><span>Skills</span></h2>
      <div class="skills">
        <div class="section">
          <h3>1: Jab</h3>
          <div class="flex-container">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAC4jAAAuIwF4pT92AAALCWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wOkNyZWF0ZURhdGU9IjIwMTUtMDctMDJUMjM6NTA6NDctMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDItMjNUMTQ6Mzg6MDgrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAyLTIzVDE0OjM4OjA4KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkYTI5Nzc3Yi1iZThjLTc0NDctODBjYS1jNTY4MzU3ZDhlMmUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZWMwOTI1Mi0xN2YzLTFhNGUtYjViYi1lOGVlOWZhZTdkMmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRTdGMTE3NDA3MjA2ODExODcxRkMxMTBDQTk0QjcwQyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSIzMDAwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSIzMDAwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjEiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMDI0IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAyNCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RkU3RjExNzQwNzIwNjgxMTg3MUZDMTEwQ0E5NEI3MEMiIHN0RXZ0OndoZW49IjIwMTUtMDctMDJUMjM6NTA6NDctMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTgwMTE3NDA3MjA2ODExOTEwOUI1MDA4NzdFOEYwMyIgc3RFdnQ6d2hlbj0iMjAxNS0wNy0wM1QyMzozMjo0MC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ2MzhiODFmLWI1NjItYTM0NC05MDExLWQ3M2FlZjg5NTgzNCIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0yM1QxNDozODowOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkYTI5Nzc3Yi1iZThjLTc0NDctODBjYS1jNTY4MzU3ZDhlMmUiIHN0RXZ0OndoZW49IjIwMjEtMDItMjNUMTQ6Mzg6MDgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYzOGI4MWYtYjU2Mi1hMzQ0LTkwMTEtZDczYWVmODk1ODM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFN0YxMTc0MDcyMDY4MTE4NzFGQzExMENBOTRCNzBDIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6RkU3RjExNzQwNzIwNjgxMTg3MUZDMTEwQ0E5NEI3MEMiLz4gPHBob3Rvc2hvcDpEb2N1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"
              alt="skill_one"
              class="pixel-icon"
            />
            <p>
              Leap forward and deal moderate damage. If you are in the zone,
              gain lifesteal buff.
            </p>
          </div>
        </div>
        <div class="section">
          <h3>2: Uppercut</h3>
          <div class="flex-container">
            <img
              src="/static/media/36.f07d27c8.png"
              alt="skill_two"
              class="pixel-icon"
            />
            <p>
              Throw a heavy punch and launch your target into the air. If you
              are in the zone, also stun the target.
            </p>
          </div>
        </div>
        <div class="section">
          <h3>3: Dodge</h3>
          <div class="flex-container">
            <img
              src="/static/media/57.22e2c496.png"
              alt="skill_three"
              class="pixel-icon"
            />
            <p>
              Jump backwards and gain resistance to fall damage. If you are in
              the zone gain barrier. A stack of barrier absorbs a damage
              completely.
            </p>
          </div>
        </div>
        <div class="section">
          <h3>Passive: Combo</h3>
          <div class="flex-container">
            <img
              src="/static/media/58.b98897e0.png"
              alt="skill_passive"
              class="pixel-icon"
            />
            <p>
              When you cast a skill gain a combo stack. Your ultimate skill
              consumes stacks to increases effect duration. Level up this skill
              to increase combo capacity.
            </p>
          </div>
        </div>
        <div class="section">
          <h3>Ultimate: In the zone</h3>
          <div class="flex-container">
            <img
              src="/static/media/32.ca39c98c.png"
              alt="skill_ultimate"
              class="pixel-icon"
            />
            <p>
              Get in the zone! You gain bonus movement speed and your other
              skills gains bonus effects.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2>Gallery</h2>
    <div class="gallery">
      <div class="item flex-container row">
        <button type="button"
          ><figure class="flex-container row">
            <img
              src="https://cdn.discordapp.com/attachments/689660026423345188/839450168684445736/unknown.png"
              alt="Serenity"
            />
            <figcaption>Serenity</figcaption>
          </figure></button
        >
      </div>
      <div class="item flex-container row">
        <button type="button"
          ><figure class="flex-container row">
            <img
              src="https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png"
              alt="Aqua Prison"
            />
            <figcaption>Aqua Prison</figcaption>
          </figure></button
        >
      </div>
      <div class="modal modal-close">
        <button class="close cursor" type="button"
          ><i class="fas fa-times" /></button
        >
        <div class="modal-content">
          <div class="modal-top flex-container">
            <div class="flex-container column">
              <div class="numbertext">1 / 2</div>
              <div class="flex-container flex-one">
                <img
                  src="https://cdn.discordapp.com/attachments/689660026423345188/839450168684445736/unknown.png"
                  alt="Serenity"
                />
              </div>
            </div>
            <div class="hidden">
              <div class="numbertext">2 / 2</div>
              <div class="flex-container flex-one">
                <img
                  src="https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png"
                  alt="Aqua Prison"
                />
              </div>
            </div>
          </div>
          <div class="prev"><button type="button">❮</button></div>
          <div class="next"><button type="button">❯</button></div>
          <div class="caption-container">
            <p id="caption">Player during Serenity</p>
          </div>
          <div class="flex-container columns">
            <div class="column">
              <input
                type="image"
                src="https://cdn.discordapp.com/attachments/689660026423345188/839450168684445736/unknown.png"
                alt="Serenity"
              />
            </div>
            <div class="column">
              <input
                type="image"
                src="https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png"
                alt="Aqua Prison"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
