import { useState } from 'react'
import RacingGamePage from './RacingGamePage'
import rabbitPetFaceIcon from './assets/rabbit-pet-face.svg'

const VIEW_HUB = 'hub'
const VIEW_RACING = 'racing'

const RACING_CARD = {
  id: VIEW_RACING,
  title: '달려달려',
  tags: ['#제비뽑기', '#순위경쟁', '#자동'],
  iconSrc: rabbitPetFaceIcon
}

function GameHub({ onEnterRacing }) {
  const cards = [RACING_CARD, null, null, null]

  return (
    <main className='game-hub-page'>
      <section className='game-hub-container'>
        <header className='game-hub-header'>
          <h1 className='game-hub-title'>미니게임</h1>
          <p className='game-hub-subtitle'>원하는 게임 카드를 선택하세요.</p>
        </header>

        <section className='game-hub-grid' aria-label='게임 목록'>
          {cards.map((card, idx) => {
            if (!card) {
              return (
                <article key={`empty-${idx}`} className='game-card game-card-empty' aria-hidden='true'>
                  <div className='game-card-icon game-card-icon-empty'>+</div>
                  <div className='game-card-title'>빈 카드</div>
                  <div className='game-card-tags'>
                    <span className='game-card-tag'>#준비중</span>
                  </div>
                </article>
              )
            }

            return (
              <button
                key={card.id}
                type='button'
                className='game-card game-card-playable'
                onClick={onEnterRacing}
                aria-label={`${card.title} 게임 시작`}
              >
                <div className='game-card-icon'>
                  <img className='game-card-icon-image' src={card.iconSrc} alt='' />
                </div>
                <div className='game-card-title'>{card.title}</div>
                <div className='game-card-tags'>
                  {card.tags.map((tag) => (
                    <span key={tag} className='game-card-tag'>
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default function App() {
  const [view, setView] = useState(VIEW_HUB)

  if (view === VIEW_RACING) {
    return (
      <div className='app-shell'>
        <div className='app-back-wrap'>
          <button type='button' className='app-back-btn' onClick={() => setView(VIEW_HUB)}>
            메인으로
          </button>
        </div>
        <RacingGamePage />
      </div>
    )
  }

  return <GameHub onEnterRacing={() => setView(VIEW_RACING)} />
}

