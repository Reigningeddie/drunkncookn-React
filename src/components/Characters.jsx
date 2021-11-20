import React from 'react'
import './characters.css'

export default function Characters() {
  return (
    <div className="characters-body">
      <main>
        <section>
          <div className="grid">
						<div>
              <h2 className="names">Character Names go here</h2>
              <p>character bio goes here</p>
            </div>
					</div>
            <div className="grid character-grid">
          </div>
        </section>
      </main>
    </div>
  )
}
