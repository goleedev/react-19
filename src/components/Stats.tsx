import { IStat } from './App';
import H2 from './H2';

type StatsType = 'Words' | 'Characters' | 'Instagram' | 'Facebook';

export default function Stats({ stats }: { stats: IStat }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} type="Words" />
      <Stat number={stats.numberOfCharacters} type="Characters" />
      <Stat number={stats.instagramCharactersLeft} type="Instagram" />
      <Stat number={stats.facebookCharactersLeft} type="Facebook" />
    </section>
  );
}

function Stat({ number, type }: { number: number; type: StatsType }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>

      <H2>{type}</H2>
    </section>
  );
}
