import {IDtplConfig, IUserTemplate, Source} from 'dot-template-types';

export default function (source: Source): IDtplConfig {
  let basename = source.filePath.match(/([^\\/]+?)(?:\.\w+)?$/)![1];
  let url = basename.replace(/^@/, '').replace(/\./, '-');

  let localData = {
    htmlClassName: basename.replace(/^@/, ''),
    defaultUrl: url,
  };

  let templates: IUserTemplate[] = [
    {
      name: 'templates/module',
      matches: ['src/**'],
    },
    {
      name: 'templates/react/component.tsx.dtpl',
      matches: ['src/**/*.tsx'],
    },
  ].map(template => {
    return {localData, ...template};
  });

  return {templates};
}
