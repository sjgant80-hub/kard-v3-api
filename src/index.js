// kard-v3-api · Express HTTP wrapper around kard-v3-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'kard-v3', version: '1.0.0' }));

app.post('/countSpineFactors', async (req, res) => {
  try {
    const { countSpineFactors } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof countSpineFactors === 'function' ? await countSpineFactors(req.body) : { error: 'countSpineFactors not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/spineFactors', async (req, res) => {
  try {
    const { spineFactors } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof spineFactors === 'function' ? await spineFactors(req.body) : { error: 'spineFactors not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/categoryToFaction', async (req, res) => {
  try {
    const { categoryToFaction } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof categoryToFaction === 'function' ? await categoryToFaction(req.body) : { error: 'categoryToFaction not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/abilityFor', async (req, res) => {
  try {
    const { abilityFor } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof abilityFor === 'function' ? await abilityFor(req.body) : { error: 'abilityFor not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/repoToCard', async (req, res) => {
  try {
    const { repoToCard } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof repoToCard === 'function' ? await repoToCard(req.body) : { error: 'repoToCard not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/loadRegistry', async (req, res) => {
  try {
    const { loadRegistry } = await import('@ai-native-solutions/kard-v3-sdk');
    const out = typeof loadRegistry === 'function' ? await loadRegistry(req.body) : { error: 'loadRegistry not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('kard-v3-api listening on :' + PORT));
