# Public photo privacy process

[English](privacy.md) | [简体中文](privacy.zh-CN.md)

This public edition stores its display photos in `public/photos`, so it does not read any original photo library or rely on personal machine paths.

Before a photo was included:

1. A local face scan was used to flag images for review.
2. Every detected face was pixelated with extra padding around the face.
3. Every included image was re-encoded without EXIF metadata, including GPS and camera metadata.
4. The resulting public photo library was manually checked before release.

Face detection can miss small, obstructed, or profile faces. Review the processed output yourself before publishing changes.
