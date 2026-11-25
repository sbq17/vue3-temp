<template>
	<div>
		<div class="h-8 flex items-center justify-center">demo</div>

		<component :is="renderBtn"></component>

		<EpBtn> </EpBtn>
	</div>
</template>

<script setup lang="ts">
import { useAppInfo } from './useAppInfo'

const { renderBtn } = useAppInfo()
</script>
