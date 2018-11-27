import { ControllerProps, RenderProps } from '../../core/controller/controller';

export interface IHomeControllerProps extends ControllerProps {
  lang: string;
}

export interface IHomeRenderProps extends RenderProps {
  data: {
    list: Post[]
    language: string
  }
  methods: {
    select: any
  }
}

interface Post {
  title: string;
  subtitle: string;
}
