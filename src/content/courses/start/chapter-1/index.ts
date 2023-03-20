import { ICourseChapterMeta } from '~/types/course';
import { lazy } from 'solid-js';

const Chapter1: ICourseChapterMeta = {
  id: 'Chapter_1',
  title: 'the first chapter of the test course',
  article: () => import('./content/chapter-1.mdx'),
};

export default Chapter1;
