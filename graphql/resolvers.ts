import { Context } from "@/types";
export const resolvers = {
  Query: {
    users: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
    blogs: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.blog.findMany();
    },
    tags: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.tag.findMany();
    },
    comments: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.comment.findMany();
    },
    followers: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.follower.findMany();
    },
    likes: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.like.findMany();
    },
    blog: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.blog.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    user: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    bookmarks: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.bookMark.findMany();
    },
    getUserByEmail: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: { email: args.email },
      });
    },
  },
  Blog: {
    likes: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.like.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    tags: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.tag.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    comments: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.comment.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
  },
  User: {
    blogs: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.blog.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    followers: async (parent: any, _args: any, content: Context) => {
      return await content.prisma.follower.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
  Mutation: {
    createUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          profileImage: args.profileImage,
        },
      });
    },
    createBlog: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.blog.create({
        data: {
          title: args.title,
          content: args.content,
          imageUrl: args.imageUrl,
          category: args.category,
          userId: args.userId,
        },
      });
    },
    addLike: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.like.create({
        data: {
          like: args.like,
          blogId: args.blogId,
        },
      });
    },
    createComment: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.comment.create({
        data: {
          comment: args.comment,
          blogId: args.blogId,
        },
      });
    },
    createTag: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.tag.create({
        data: {
          tag: args.tag,
          blogId: args.blogId,
        },
      });
    },
    addFollower: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.follower.create({
        data: {
          follower: args.follower,
          userId: args.userId,
          followingUserId: args.followingUserId,
        },
      });
    },
    updateBlog: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.blog.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          content: args.content,
          imageUrl: args.imageUrl,
          category: args.category,
        },
      });
    },
    updateComment: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.comment.update({
        where: {
          id: args.id,
        },
        data: {
          comment: args.comment,
        },
      });
    },
    deleteBlog: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.blog.delete({
        where: {
          id: args.id,
        },
      });
    },
    deleteComment: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.comment.delete({
        where: {
          id: args.id,
        },
      });
    },
    deleteLike: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.like.delete({
        where: {
          id: args.id,
        },
      });
    },
    deleteTag: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.tag.delete({
        where: {
          id: args.id,
        },
      });
    },
    deleteFollower: async (_parent: string, args: any, context: Context) => {
      return await context.prisma.follower.delete({
        where: {
          id: args.id,
        },
      });
    },
    addBookmark: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.bookMark.create({
        data: {
          userId: args.userId,
          itemId: args.itemId,
        },
      });
    },
  },
};
